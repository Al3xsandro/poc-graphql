import { Field, InputType } from "type-graphql";

@InputType()
class CreateUserInput {
    @Field()
    name: string;

    @Field()
    password: string;
}

export { CreateUserInput }