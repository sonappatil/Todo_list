import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class TodoDto {
    id: string;
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    @IsNotEmpty()
    description: string;
    @IsBoolean()
    completed: boolean;
  }
  