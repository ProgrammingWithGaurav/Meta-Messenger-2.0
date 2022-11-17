import MessageList from "./MessageList";
import ChatInput from "./ChatInput";
import { Providers } from './providers';
import { unstable_getServerSession } from "next-auth";

async function HomePage() {
  const session = await unstable_getServerSession();

  return (
    <Providers session={session}>
    <main>
      <MessageList/>
      <ChatInput />
    </main>
    </Providers>
  );
}

export default HomePage;
