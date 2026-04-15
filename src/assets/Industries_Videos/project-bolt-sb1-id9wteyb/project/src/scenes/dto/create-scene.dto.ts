import { IsArray, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class CallToActionItem {
  @IsArray()
  yes?: string[];

  @IsArray()
  no?: string[];
}

export class CreateSceneDto {
  @IsString()
  type: string;

  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  message_sequence: string[];

  @IsArray()
  @IsString({ each: true })
  question: string[];

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CallToActionItem)
  call_to_action_sequence: CallToActionItem[];
}

export class CreateScenesDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSceneDto)
  scenes: CreateSceneDto[];
}