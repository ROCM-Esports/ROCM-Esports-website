import {z} from 'zod';
import { SignUpSchema } from '../../common/validation/forms';
import { createRouter } from "../context";
import {hash} from 'argon2';
import { TRPCError } from '@trpc/server';

export const authRouter = createRouter()
    .mutation("signup", {
        input: SignUpSchema,
        async resolve({ input, ctx }) {
            const { name, email, password } = input;
            
            // check if user already exists
            const exists = await ctx.prisma.user.findUnique({
                where: {
                    email
                }
            });
            if (exists) {
                throw new TRPCError({
                    code: 'CONFLICT',
                    message: 'User already exists'
                })
            }
            const hashedPassword = await hash(password);

            const newUser = await ctx.prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                },
            });
            return {
                message: "User created successfully",
                userEmail: newUser.email,
                status: 201,
            };
        },
    });