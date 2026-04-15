import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { LoginDto } from './dto/login.dto';
import { ChangePasswordDto } from './dto/change-password.dto';
import { AuthGuard } from './guards/auth.guard';
import { AdminUser } from './decorators/admin-user.decorator';
import { Admin } from './entities/admin.entity';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.adminService.login(loginDto);
  }

  @UseGuards(AuthGuard)
  @Post('change-password')
  async changePassword(
    @AdminUser() admin: Admin,
    @Body() changePasswordDto: ChangePasswordDto,
  ) {
    return this.adminService.changePassword(admin.id, changePasswordDto);
  }
}