import './App.css';
import { IconButton } from './components/buttons/IconButton';
import { GeneralInput } from './components/inputs/General';
import { SelectDropDown } from './components/inputs/Select';
import { SingleCheckbox } from './components/inputs/SingleCheckbox';
import { TextArea } from './components/inputs/TextArea';
import { useForm, FormProvider } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRef } from 'react';

function App() {
  const methods = useForm();
  const form = useRef();

  const onSubmit = (data) => handleSubmit(data);

  const handleSubmit = async (data) => {
    console.log(data)
    emailjs.send("service_ethqtxe","template_lcj7rl4", {
      name: data.name,
      email: data.email,
      message: data.message,
      copy: data.sendCopy ? data.email : "",
    }, "8OVGTHtgbT_tkqTLh")
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  return (
    <div className="App">
      <div className='h-screen flex justify-center items-center' >
        <section className="rounded-lg bg-white px-5 py-5 w-full mx-5 md:w-1/2 shadow-md">
          <FormProvider {...methods}>
          <form ref={form} className='flex flex-col gap-2' onSubmit={methods.handleSubmit(onSubmit)}>
            <div>
              <SelectDropDown  />
            </div>
            <div>
              <TextArea title="Your message" name={"message"} />
            </div> 
            <div>
              <GeneralInput title='Your name' name={"name"} />
            </div>
            <div>
              <GeneralInput title='Your email address' name={"email"} type='email' />
            </div>
            <div>
              <GeneralInput title='Your phone number' name={"phone"} type="tel" />
            </div>
            <div className="w-full flex gap-2 mt-2">
              <SingleCheckbox name={"sendCopy"} />
            </div>
            <div className='mt-2'>
              <IconButton title={"Send"} type={"submit"} />
            </div>
          </form>
          </FormProvider>
        </section>
      </div>
    </div>
  );
}

export default App;
