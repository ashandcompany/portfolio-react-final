import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

// Input component
const Input = ({ placeholder, type = "text", ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
    {...props}
  />
);

// Textarea component
const Textarea = ({ placeholder, ...props }) => (
  <textarea
    placeholder={placeholder}
    {...props}
  />
);

// Button component
const Button = ({ children, className, ...props }) => (
  <button
    className={`bg-pink-dark text-white p-3 rounded-lg hover:bg-pink transition duration-200 ease-in-out ${className}`}
    {...props}
  >
    {children}
  </button>
);

// Card components
const Card = ({ children, className }) => (
  <div className={`bg-white shadow-xl dark:bg-darkPink p-8 rounded-lg ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children }) => (
  <div className="text-xl font-semibold dark:text-pinkDark text-pinkDark-dark dark:text-pink-dark mb-4">{children}</div>
);

const CardTitle = ({ children }) => (
  <h2 className="text-3xl font-bold pink-dark mb-4">{children}</h2>
);

const CardContent = ({ children }) => <div className="mt-4">{children}</div>;

// Main component
export default function Contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section id="contact" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mx-auto max-w-xl">
          <CardHeader>
            <CardTitle>Envie de me contacter ?</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <Input
                  placeholder="Votre Nom"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Votre Email"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <Textarea
                  placeholder="Votre Message"
                  className="min-h-[150px] w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  {...register("message", { required: true })}
                />
              </div>
              <Button type="submit" className="w-full">
                Envoyer votre message
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}

