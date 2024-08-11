import RegisterForm from '@/components/auth/RegisterForm';
import SocialLogins from '@/components/auth/SocialLogins';


const RegistrationPage = () => {
    return (
        <section className="h-screen grid place-items-center mt-20">
      <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
        <h4 className="font-bold text-2xl">Sign up</h4>
        <RegisterForm  />
        <SocialLogins mode="register" />
      </div>
    </section>
    );
};

export default RegistrationPage;