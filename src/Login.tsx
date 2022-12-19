import { useState } from "react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";

import Dialog from "./Dialog";
import { supaClient } from "./supa-client";

export const setReturnPath = () => {
  localStorage.setItem("returnPath", window.location.pathname);
};

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const [authMode, setAuthMode] = useState<"sign_in" | "sign_up">("sign_in");

  return (
    <>
      <div className="flex m-4 place-items-center">
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_in");
            setReturnPath();
          }}
        >
          Login
        </button>{" "}
        <span className="p-2">or</span>{" "}
        <button
          onClick={() => {
            setShowModal(true);
            setAuthMode("sign_up");
            setReturnPath();
          }}
        >
          Sign up
        </button>
      </div>
      <Dialog
        open={showModal}
        dialogStateChange={(open) => setShowModal(open)}
        contents={
          <>
            {
              <>
                <Auth
                  supabaseClient={supaClient}
                  view={authMode}
                  appearance={{
                    theme: ThemeSupa,
                    className: {
                      container: "login-form-container",
                      label: "login-form-label",
                      button: "login-form-button",
                      input: "login-form-input",
                    },
                  }}
                />
                <button onClick={() => setShowModal(false)}>Close</button>
              </>
            }
          </>
        }
      />
    </>
  );
};

export default Login;
