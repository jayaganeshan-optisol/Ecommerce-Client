import { useForm, SubmitHandler } from "react-hook-form";
interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
const onSubmit: SubmitHandler<IChangePassword> = async (data) => {
  console.log(data);
};

const emailPattern = new RegExp("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$");

function Account() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IChangePassword>();
  return (
    <div>
      <h2>change password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="current password"
          {...register("oldPassword", { required: true, pattern: emailPattern })}
        />
        <input
          type="email"
          placeholder="new password"
          {...register("newPassword", { required: true, pattern: emailPattern })}
        />
        <input type="submit" value="change Password" />
      </form>
    </div>
  );
}

export default Account;
