/* eslint-disable react/no-unescaped-entities */
import {
  SunIcon,
  BoltIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="flex text-white items-center h-screen justify-center px-2 flex-col">
      <h1 className="text-5xl font-bold mb-20">ChatGPT</h1>
      <div className="flex space-x-2 text-center">
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <SunIcon className="h-8 w-8 " />
            <h2>Examples</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Explain something to me"</p>
            <p className="infoText">
              "Why is the dog called man's best friend?"
            </p>
            <p className="infoText">"How many lightyears is it to the sun?"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <BoltIcon className="h-8 w-8 " />
            <h2>Capabilities</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">"Several ChatGPT models to use"</p>
            <p className="infoText">
              "Messages are stored in Firebase's Firestore"
            </p>
            <p className="infoText">"Hot Toast notifications"</p>
          </div>
        </div>
        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            <ExclamationTriangleIcon className="h-8 w-8 " />
            <h2>Limitations</h2>
          </div>
          <div className="space-y-2">
            <p className="infoText">
              "May occasionally generate incorrect information"
            </p>
            <p className="infoText">
              "May occasionally produce harmful instructions or biased content"
            </p>
            <p className="infoText">
              "Limited knowledge of world & events after 2021"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
