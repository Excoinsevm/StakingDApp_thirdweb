import { ThirdwebProvider } from '@thirdweb-dev/react';
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from '../components/Navbar';
import { Sepolia } from "@thirdweb-dev/chains";

// client_id = "d3488c8d08533b7d132b62a082f1d9f2"
// secret_key = "ibQKgP_EvA-YN6lxuy0XE-UmZ-srl-ZRjWWWvFOQys-4BX2iu32DUZ4ZzziLPKqfW7jGiBWNanP12GuhtUCXRA"

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = 'sepolia';

function MyApp({ Component, pageProps }) {
	return (
		<ThirdwebProvider
			// activeChain={activeChain}
			activeChain={ Sepolia } 
			clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
		>
			<ChakraProvider>
				<Navbar />
				<Component {...pageProps} />
			</ChakraProvider>
		</ThirdwebProvider>
	);
}

export default MyApp;
