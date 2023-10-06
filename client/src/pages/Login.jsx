import { useState } from "react";
import { useDispatch } from "react-redux";
import { TbSocial } from "react-icons/tb";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextInput, Loading, CustomButton } from "../components/index";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="bg-bgColor w-full h-[100vh] flex flex-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex bg-primary rounded-xl overflow-auto shadow-xl">
        {/* LEFT */}
        <div className="h-full w-full lg:w-1/2 h-full p-10 2xl:px-20 flex flex-col justify-center">
          <div className="w-full flex gap-2 items-center mb-6">
            <div className="p-2 bg-[#065ad8] rounded text-white">
              <TbSocial />
            </div>
            <span className="text-2xl text-[#065ad8]" font-semibold="true">
              Social Media MERN App
            </span>
          </div>
          <p className="text-ascent-1 text-base font-semibold">
            Log in to your account
          </p>
          <span className="text-sm mt-2 text-ascent-2">Welcome back</span>
          <form className="py-8 flex flex-col gap-5 overflow-auto">
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              styles="w-full rounded-full "
              labelStyle="ml-2"
              register={register("email", {
                required: "Email Address is required",
              })}
              error={errors.email ? errors.email.message : null}
            />
            <TextInput
              name="password"
              placeholder="Password"
              label="Password"
              type="password"
              styles="w-full rounded-full "
              labelStyle="ml-2"
              register={register("password", {
                required: "Password is required",
              })}
              error={errors.password ? errors.password.message : null}
            />
            <Link
              to="/reset-password"
              className="text-sm text-right text-blue font-semibold"
            >
              Forgot Password
            </Link>
            {errMsg?.message && (
              <span
                className={`text-sm ${
                  errMsg.status === "failed"
                    ? "text-[#f64949fe]"
                    : "text-[#2ba150fe]"
                } mt-0.5`}
              >
                {errMsg?.message}
              </span>
            )}

            {isSubmitting ? (
              <Loading />
            ) : (
              <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm
                font-medium text-white outline-none`}
                title="Login"
              />
            )}
          </form>

          <p>Don&apos;t have an account ?</p>
           <Link 
          to='/register'
          className='text-sm text-right text-blue font-semibold'
        >Create Account</Link>
           
        </div>
        {/* RIGHT */}
        <div></div>
      </div>
    </div>
  );
};

export default Login;
