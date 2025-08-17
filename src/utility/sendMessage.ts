import { UserSchema } from "@/components/ContactSection";
import { fireStoreDB } from "@/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { z } from "zod";

export async function sendMessage(data: z.infer<typeof UserSchema>) {
  try {
    const docRef = await addDoc(collection(fireStoreDB, "messages"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return docRef;
  } catch {
    return false;
  }
}
