import { Button } from "@/components/ui/button";

export default function Page_A() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button>クリックA！</Button>
      </div>
    </main>
  );
}




// export default function BlogPost() {
//   const router = useRouter();
//   const { id } = router.query; // URLのパラメータ "id" を取得

//   return <h1>Blog Post ID: {id}</h1>;
// }