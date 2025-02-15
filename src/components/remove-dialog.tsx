'use client'

import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel"
import { AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogDescription,
    AlertDialogAction,
    AlertDialogCancel, } from "./ui/alert-dialog"
import { api } from "../../convex/_generated/api";
import { useState } from "react";
import {toast} from 'sonner'
interface RemoveDialogProps{
    documentId: Id<"documents">;
    children: React.ReactNode;
}
export const RemoveDialog=({documentId,children}:RemoveDialogProps)=>{
    const remove=useMutation(api.documents.removeByID)
    const [isRemoving,setIsRemoving]=useState(false);
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {children}
            </AlertDialogTrigger>
            <AlertDialogContent onClick={(e)=>e.stopPropagation()}>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your document.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={(e)=>e.stopPropagation()}>
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction disabled={isRemoving} onClick={(e)=>{
                        e.stopPropagation();
                        setIsRemoving(true);
                        remove({id:documentId}).
                        then(()=>toast.success('Document deleted successfully')).
                        catch((error)=>toast.error("Something went wrong")).
                        finally(()=>setIsRemoving(false))
                    }}>
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}