
import GetData from "@/components/GetData";
import GetDataServerAction from "@/components/GetDataServerAction";
import LearnClientComponent from "@/components/LearnClientComponent";
import LearnDataFetching from "@/components/LearnDataFetching";
import LearnImage from "@/components/LearnImage";
import LearnLink from "@/components/LearnLink";
import LearnServerComponent from "@/components/LearnServerComponent";
import LearnUseRouter from "@/components/LearnUseRouter";
import PostData1 from "@/components/PostData1";
import PostDataServerAction from "@/components/PostDateServerAction";

export const metadata={
  title:"Blog Post"
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* <h1>Hello world</h1> */}
      {/* <LearnLink/> */}
      {/* <LearnUseRouter/> */}
      {/* <LearnServerComponent/> */}
      {/* <LearnImage/> */}
      {/* <LearnDataFetching/> */}
     {/* <LearnClientComponent/> */}

      {/* <PostData1/> */}
      {/* <br/> */}
      {/* <br/> */}
      {/* <GetData/> */}

      <PostDataServerAction/>
      <GetDataServerAction/>

    </main>
  );
}
