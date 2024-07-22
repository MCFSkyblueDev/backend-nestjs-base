import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {
  @IsNotEmpty({ message: "The item name must be specified" })
  @Length(3, 400)
  name: string;
  public: boolean;
}
