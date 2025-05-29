import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
// This page is used to create a new companion. It checks if the user is authenticated and then renders the CompanionForm component.

const NewCompanion = async () => {
    const { userId} = await auth();
    if(!userId) redirect("/sign-in");


    return (
        <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
            <article className="w-full gap-4 flex flex-col">
                <h1>Companion Builder</h1>
                
                <CompanionForm />
            </article>
        </main>
    );
}

export default NewCompanion;