import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { SignUpSchema } from "../../server/common/validation/forms"
import { useCallback } from "react"
import { trpc } from "../../utils/trpc"
import { useRouter } from "next/router"

type SignupFormInputs = z.infer<typeof SignUpSchema>

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormInputs>({ resolver: zodResolver(SignUpSchema) })

  const { mutateAsync } = trpc.useMutation(["auth.signup"])
  const router = useRouter()

    const onSubmit = (data: SignupFormInputs) => {
        console.log(data);
    }
      

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <section className="form-part">
          <label htmlFor="name">Full name</label>
          <input {...register("name")} />
          {errors.name && <p>{errors.name.message}</p>}
        </section>
        <section className="form-part">
          <label htmlFor="email">Email</label>
          <input {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </section>
        <section className="form-part">
          <label htmlFor="password">Password</label>
          <input {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
        </section>
        <section className="form-part">
          <label htmlFor="confirmPassword">Confirm password</label>
          <input {...register("confirmPassword")} />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </section>
        <input type="submit" value={"submit"} name="submit"/>
      </form>
    </>
  )
}

export default Signup
