import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("mldpwrzy");
  if (state.succeeded) {
    return <section className="h-screen flex justify-center items-center snap-center" id='contact'><p>Thanks for reaching out!</p></section>;
  }
  return (
    <section className="h-screen flex justify-center items-center snap-center" id='contact'>
      <form onSubmit={handleSubmit} className='grid sm:grid-cols-2 grid-rows-4 gap-4'>
        <input
          id='name'
          type='text'
          name='name'
          autoComplete='off'
          placeholder='Name'
          required
          className='border-sky-800 border-2 p-2 rounded col-start-1'
        />

        <ValidationError
          prefix='name'
          field='name'
          className='text-amber-500'
          errors={state.errors}
        />

        <input
          id="email"
          type="email"
          name="email"
          placeholder='Email'
          autoComplete='off'
          required
          className='border-sky-800 border-2 p-2 rounded col-start-1'
        />

        <ValidationError
          prefix="Email"
          field="email"
          className='text-amber-500'
          errors={state.errors}
        />

        <input
          id="subject"
          type="subject"
          name="subject"
          placeholder='Subject'
          autoComplete='off'
          required
          className='border-sky-800 border-2 p-2 rounded col-start-1'
        />

        <textarea
          id="message"
          name="message"
          placeholder='Message'
          className='border-sky-800 border-2 p-2 rounded resize-none w-auto h-full col-start-2 sm:row-start-1 row-span-3 not-sm:col-start-1'
          required
          autoComplete='off'
        />

        <ValidationError
          prefix="Message"
          field="message"
          className='text-amber-500'
          errors={state.errors}
        />

        <button type="submit" disabled={state.submitting} className='sm:row-start-4 col-start-2 bg-white text-black min-h-1/2 min-w-1/2 ml-auto rounded not-sm:col-start-1 justify-center flex items-center'>
          {state.submitting ? <div className='size-6 animate-spin border-t-2 rounded-t-full border-t-sky-500' /> : "Submit"}
        </button>

      </form>
    </section>
  );
}