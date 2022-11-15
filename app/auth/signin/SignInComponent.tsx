import { getProviders } from "next-auth/react";

type Props = {
    providers: Awaited<ReturnType<typeof getProviders>>;
}

function SignInComponent({providers} : Props){
    return (
    {Object.values(providers!).map((provider) => (
        <div key={provider.id}>
            <button>Sign in with {provider.name}</button>
        </div>
    ))}

    )
}

export default SignInComponent;