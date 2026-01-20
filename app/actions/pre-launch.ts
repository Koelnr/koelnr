"use server";

import { type FirebaseError } from "firebase/app";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export async function savePreLaunchEmail(email: string, city?: string) {
  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        success: false,
        error: "Invalid email format",
      };
    }

    // Save to Firestore
    const docRef = await addDoc(collection(db, "pre-launch"), {
      email: email.toLowerCase().trim(),
      city: city || null,
      timestamp: Timestamp.now(),
    });

    return {
      success: true,
      id: docRef.id,
      message: "Email saved successfully!",
    };
  } catch (error) {
    console.error("Error saving email to pre-launch:", error);
    return {
      success: false,
      error:
        (error as FirebaseError).message ||
        "Failed to save email. Please try again.",
    };
  }
}
