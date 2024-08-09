import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { Button } from '@/components/ui/button'
import { redirect } from "next/navigation";

export default async function AuthButton() {
  const supabase = createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const signOut = async () => {
    "use server";

    const supabase = createClient();
    await supabase.auth.signOut();
    return redirect("/login");
  };

  return user ? (
    <div className="flex items-center gap-4 text-sm">
      Hey, {user.email}!
      <form action={signOut}>
        <Button variant='outline'>
          Logout
        </Button>
      </form>
    </div>
  ) : (
    <Link
      href="/login"
      className=""
    >
    <Button variant='outline'>Login</Button>
    </Link>
  );
}
