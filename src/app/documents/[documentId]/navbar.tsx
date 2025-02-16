'use client';

import Image from 'next/image';
import Link from 'next/link';
import { DocumentInput } from './document-input';
import { Menubar, MenubarContent, MenubarSub, MenubarShortcut, MenubarItem, MenubarSubContent, MenubarMenu, MenubarSubTrigger, MenubarTrigger, MenubarSeparator } from '@/components/ui/menubar';
import { BoldIcon, FileIcon, FileJsonIcon, FilePenIcon, FilePlusIcon, FileTextIcon, GlobeIcon, ItalicIcon, PrinterIcon, Redo2Icon, RemoveFormattingIcon, Strikethrough, TextIcon, TrashIcon, Underline, Undo2Icon } from 'lucide-react';
import { BsFilePdf } from 'react-icons/bs';
import { useEditorStore } from '@/store/use-editor-store';
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';
import { Avatars } from './avatars';
import { Inbox } from './inbox';
import { Doc } from '../../../../convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { RemoveDialog } from '@/components/remove-dialog';
import { RenameDialog } from '@/components/rename-dialog';

interface NavbarProps{
    data: Doc<"documents">,
}
const FileMenu = ({data}:NavbarProps) => {
    const router=useRouter();
    const { editor } = useEditorStore();
    const onDownload = (blob: Blob, filename: string) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
    }
    const onSaveJSON = () => {
        if (!editor) return;
        const content = editor.getJSON();
        const blob = new Blob([JSON.stringify(content)], {
            type: "application/json"
        });
        onDownload(blob, `${data.title}.json`)//TODO: Use document name
    }
    const onSaveHTML = () => {
        if (!editor) return;
        const content = editor.getHTML();
        const blob = new Blob([content], {
            type: "text/html"
        });
        onDownload(blob, `${data.title}.html`)//TODO: Use document name
    }
    const onSaveText = () => {
        if (!editor) return;
        const content = editor.getText();
        const blob = new Blob([content], {
            type: "text/plain"
        });
        onDownload(blob, `${data.title}.txt`)//TODO: Use document name
    }

    const mutation=useMutation(api.documents.create);
    const onNewDocument=()=>{
        mutation({
            title:"Untitled Document",
            initialContent:''
        }).then((id)=>{
            toast.success("New Document Created")
            router.push(`/documents/${id}`)
        }).catch(()=>toast.error("Something went wrong"))
    }
    return (<MenubarMenu>
        <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">File</MenubarTrigger>
        <MenubarContent className="print:hidden">
            <MenubarSub>
                <MenubarSubTrigger><FileIcon className="size-4 mr-2" />Save</MenubarSubTrigger>
                <MenubarSubContent>
                    {[
                        { icon: FileJsonIcon, label: 'JSON', onclick: () => onSaveJSON() },
                        { icon: GlobeIcon, label: 'HTML', onclick: () => onSaveHTML() },
                        { icon: BsFilePdf, label: 'PDF', onclick: () => window.print() },
                        { icon: FileTextIcon, label: 'Text', onclick: () => onSaveText() },
                    ].map(({ icon: Icon, label, onclick }) => (
                        <MenubarItem onClick={onclick} key={label}><Icon className="size-4 mr-2" />{label}</MenubarItem>
                    ))}
                </MenubarSubContent>
            </MenubarSub>
            <MenubarItem onClick={onNewDocument}><FilePlusIcon className="size-4 mr-2" />New Document</MenubarItem>
            <MenubarSeparator />
            <RenameDialog documentId={data._id} initialTitle={data.title}>
            <MenubarItem  onClick={(e)=>{
                    e.stopPropagation();
                }}
                onSelect={(e)=>{
                    e.preventDefault();
                }}>
                <FilePenIcon className="size-4 mr-2" />
                Rename
            </MenubarItem>
            </RenameDialog>
            <RemoveDialog documentId={data._id}>
                <MenubarItem onClick={(e)=>{
                    e.stopPropagation();
                }}
                onSelect={(e)=>{
                    e.preventDefault();
                }}
                >
                    <TrashIcon className="size-4 mr-2" />
                    Delete
                </MenubarItem>
            </RemoveDialog>
            <MenubarSeparator />
            <MenubarItem onClick={() => window.print()}><PrinterIcon className="size-4 mr-2" />Print <MenubarShortcut><strong>ctrl+P</strong></MenubarShortcut></MenubarItem>
        </MenubarContent>
    </MenubarMenu>)
};

const EditMenu = () => {
    const { editor } = useEditorStore()
    return (
        <MenubarMenu>
            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">Edit</MenubarTrigger>
            <MenubarContent>
                <MenubarItem onClick={() => editor?.chain().focus().undo().run()}><Undo2Icon className="size-4 mr-2" />Undo <MenubarShortcut><strong>ctrl+Z</strong></MenubarShortcut></MenubarItem>
                <MenubarItem onClick={() => editor?.chain().focus().redo().run()}><Redo2Icon className="size-4 mr-2" />Redo <MenubarShortcut><strong>ctrl+Y</strong></MenubarShortcut></MenubarItem>
            </MenubarContent>
        </MenubarMenu>
    )
};

const InsertMenu = () => {
    const { editor } = useEditorStore()
    const insertTable = ({ rows, cols }: { rows: number, cols: number }) => {
        editor?.chain().focus().insertTable({ rows, cols, withHeaderRow: false }).run()
    }
    return (
        <MenubarMenu>
            <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">Insert</MenubarTrigger>
            <MenubarContent>
                <MenubarSub>
                    <MenubarSubTrigger>Table</MenubarSubTrigger>
                    <MenubarSubContent>
                        {[1, 2, 3, 4].map((i) => (
                            <MenubarItem onClick={() => insertTable({ rows: i, cols: i })} key={i}>{i} x {i}</MenubarItem>
                        ))}
                    </MenubarSubContent>
                </MenubarSub>
            </MenubarContent>
        </MenubarMenu>
    )
};

const FormatMenu = () => {
    const { editor } = useEditorStore()
    return (<MenubarMenu>
        <MenubarTrigger className="text-sm font-normal py-0.5 px-[7px] rounded-sm hover:bg-muted h-auto">Format</MenubarTrigger>
        <MenubarContent>
            <MenubarSub>
                <MenubarSubTrigger><TextIcon className="size-4 mr-2" />Text</MenubarSubTrigger>
                <MenubarSubContent>
                    {[
                        { icon: BoldIcon, label: 'Bold', shortcut: 'ctrl+B', onClick: () => editor?.chain().focus().toggleBold().run() },
                        { icon: ItalicIcon, label: 'Italic', shortcut: 'ctrl+I', onClick: () => editor?.chain().focus().toggleItalic().run() },
                        { icon: Underline, label: 'Underline', shortcut: 'ctrl+U', onClick: () => editor?.chain().focus().toggleUnderline().run() },
                        { icon: Strikethrough, label: 'Strikethrough', shortcut: 'ctrl+S', onClick: () => editor?.chain().focus().toggleStrike().run() },
                    ].map(({ icon: Icon, label, shortcut, onClick }) => (
                        <MenubarItem onClick={onClick} key={label}><Icon className="size-4 mr-2" />{label}<MenubarShortcut><strong>{shortcut}</strong></MenubarShortcut></MenubarItem>
                    ))}
                </MenubarSubContent>
            </MenubarSub>
            <MenubarItem onClick={() => editor?.chain().focus().unsetAllMarks().run()}><RemoveFormattingIcon className="size-4 mr-2" />Clear Formatting</MenubarItem>
        </MenubarContent>
    </MenubarMenu>)
};

export const Navbar = ({data}:NavbarProps) => {
    return (
        <nav className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
                <Link href='/'><Image width={36} height={36} src="/logo.svg" alt="logo" /></Link>
                <div className="flex flex-col">
                    <DocumentInput title={data.title} id={data._id}/>
                    <div className="flex">
                        <Menubar className="border-none bg-transparent shadow-none h-auto p-0">
                            <FileMenu data={data}  />
                            <EditMenu />
                            <InsertMenu />
                            <FormatMenu />
                        </Menubar>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <Avatars/>
                <Inbox/>
            <OrganizationSwitcher
             afterLeaveOrganizationUrl='/' 
             afterCreateOrganizationUrl='/'
              afterSelectOrganizationUrl='/'
               afterSelectPersonalUrl='/'/>
            <UserButton/>
        </div>
        </nav>
    );
};
