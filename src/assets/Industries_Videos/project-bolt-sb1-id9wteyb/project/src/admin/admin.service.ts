import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { Admin } from './entities/admin.entity';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private readonly adminRepository: Repository<Admin>,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDto: LoginDto) {
    const admin = await this.adminRepository.findOne({
      where: { email: loginDto.email },
    });

    if (!admin) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      admin.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const token = this.jwtService.sign({ id: admin.id, email: admin.email });

    return { token };
  }

  async changePassword(adminId: number, changePasswordDto: ChangePasswordDto) {
    const admin = await this.adminRepository.findOne({
      where: { id: adminId },
    });

    if (!admin) {
      throw new UnauthorizedException('Admin not found');
    }

    const isOldPasswordValid = await bcrypt.compare(
      changePasswordDto.oldPassword,
      admin.password,
    );

    if (!isOldPasswordValid) {
      throw new UnauthorizedException('Invalid old password');
    }

    const hashedPassword = await bcrypt.hash(changePasswordDto.newPassword, 10);
    admin.password = hashedPassword;

    await this.adminRepository.save(admin);

    return { message: 'Password changed successfully' };
  }

  async validateToken(token: string): Promise<Admin> {
    try {
      const payload = this.jwtService.verify(token);
      return this.adminRepository.findOne({ where: { id: payload.id } });
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}