import { useState } from "react";
import { useDispatch } from "react-redux";
import { TbSocial } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import { ImConnection } from "react-icons/im";
import { AiOutlineInteraction } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { TextInput, Loading, CustomButton } from "../components/index";
import { BgImage } from "../assets";

const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {};

  return (
    <div className="bg-bgColor w-full h-[100vh] flex flex-center justify-center p-6">
      <div className="w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-auto shadow-xl">
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
            Create your account
          </p>

          <form
            className="py-8 flex flex-col gap-5 overflow-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex gap-1">
              <TextInput
                name="First Name"
                placeholder="First Name"
                label="First Name"
                type="firstName"
                styles="w-full"
                labelStyle="ml-2"
                register={register("firstName", {
                  required: "Last name do not match",
                })}
                error={errors.firstName ? errors.firstName?.message : ""}
              />
              <TextInput
                name="Last Name"
                placeholder="Last Name"
                label="Last Name"
                type="lastName"
                styles="w-full"
                labelStyle="ml-2"
                register={register("lastName", {
                  required: "Last name do not match",
                })}
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              styles="w-full"
              register={register("email", {
                required: "Email Address is required",
              })}
              error={errors.email ? errors.email.message : null}
            />
            <div className="flex gap-1">
              <TextInput
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
                styles="w-full"
                register={register("password", {
                  required: "Password is required",
                })}
                error={errors.password ? errors.password.message : null}
              />
              <TextInput
                name="confirmPassword"
                placeholder="Confirm Password"
                label="Confirm Password"
                type="password"
                styles="w-full"
                labelStyle="ml-2"
                register={register("confirmPassword", {
                  validate: (value) => {
                    const {password} = getValues();
                    if (password != value) {
                      return 'Passwords do not match!';
                    }
                  },
                })}
                error={
                  errors.confirmPassword && errors.confirmPassword.type === 'validate'
                  ? errors.confirmPassword?.message 
                  : ''
                }
              />
            </div>
            
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
                title="Create Account"
              />
            )}
          </form>

          <div className='flex justify-between'>
          <p className="text-ascent-2 text-sm text-center">
          Already have an account ?
        </p>
        <Link
          to="/login"
          className="text-sm text-right text-blue font-semibold"
        >
          Login
        </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue">
          <div className="relative w-full flex flex-col items-center justify-between">
            <img
              src={BgImage}
              alt="Background"
              className="w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover"
            />
            <div className="flex items-center gap-1 py-2 px-5 mt-3">
              <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                <span>
                  <BsShare size="14" />
                </span>
                <span className="text-xs font-medium">Share</span>
              </div>
              <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                <span>
                  <ImConnection size="14" />
                </span>
                <span className="text-xs font-medium">Connect</span>
              </div>
              <div className="bg-white px-2 py-1 rounded-full flex items-center gap-1">
                <span>
                  <AiOutlineInteraction size="14" />
                </span>
                <span className="text-xs font-medium">Interact</span>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-base">
              Connect with friends in this MERN social app
            </p>
            <p className="text-sm text-white/80">
              Share memories with friend and the world
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
