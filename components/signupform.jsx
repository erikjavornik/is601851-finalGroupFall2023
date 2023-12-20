import { useRef } from 'react';
import subscribeUser from '../pages/api/subscribeUser';

export default function NewsLetterSignUpForm() {
  const inputRef = useRef(null);

  const subscribeUser = async (e) => {
    e.preventDefault();

    // this is where your mailchimp request is made

    const res = await fetch('/api/subscribeUser', {
      body: JSON.stringify({
        email: inputRef.current.value,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  return (
    <form onSubmit={subscribeUser}>
      <label htmlFor="email-input" className="form__label">
        Sign-up for Exclusive Offers:      
      </label>

      <input
        type="email"
        id="email-input"
        name="email"
        placeholder="email@website.com"
        ref={inputRef}
        required
        autoCapitalize="off"
        autoCorrect="off"
      />

      <button type="submit" value="" name="subscribe">
        Submit
      </button>
    </form>
  );
}