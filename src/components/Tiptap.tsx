import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  FaBold,
  FaHeading,
  FaItalic,
  FaListOl,
  FaListUl,
  FaUnderline,
  FaSmile,
  FaFileImage,
  FaFileAlt,
} from "react-icons/fa";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";
import { EmojiClickData } from "emoji-picker-react";

interface MenuBarProps {
  editor: any;
  setEmojiBoard: React.Dispatch<React.SetStateAction<boolean>>;
  emojiBoard: boolean;
}

const MenuBar = ({ editor, emojiBoard, setEmojiBoard }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  const upload = (file: File) => {
    // handle upload logic here

    console.log(file);

    // return a promise that resolves the URL of the uploaded image
    return Promise.resolve("https://picsum.photos/200/300");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files?.[0]) return;
    upload(e.target.files[0])
      .then((res) => addImage(res))
      .catch((err) => console.error(err));
  };

  // const setLink = () => {
  //   const url = window.prompt("URL");

  //   if (!url) return;

  //   editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  // };

  const addImage = (url: string) => {
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  return (
    <div className="menu-bar" id="menu-bar" style={{ position: "relative" }}>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "is-active" : ""}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toogleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "is-active" : ""}
      >
        <FaUnderline />
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "is-active" : ""}
      >
        <FaStrikethrough />
      </button> */}

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "is-active" : ""}
      >
        <FaHeading />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive("bulletList") ? "is-active" : ""}
      >
        <FaListUl />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "is-active" : ""}
      >
        <FaListOl />
      </button>

      <button
        style={{ position: "absolute", right: 0 }}
        onClick={() => setEmojiBoard(!emojiBoard)}
      >
        <FaSmile />
      </button>

      <button>
        <label htmlFor="upload-image">
          <FaFileImage />
          <input
            id="upload-image"
            accept=".jpg,.png,.jpeg"
            type="file"
            onChange={handleChange}
          />
        </label>
      </button>
      <button>
        <label htmlFor="upload-file">
          <FaFileAlt />
          <input id="upload-file" type="file" onChange={handleChange} />
        </label>
      </button>
    </div>
  );
};

export default function Tiptap() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Image,
      Placeholder.configure({
        placeholder: "What are your thoughts on...",
      }),
    ],
  });

  const [emojiBoard, setEmojiBoard] = useState(false);

  function onClickEmoji(emojiData: EmojiClickData) {
    console.log(emojiData.emoji);

    if (editor !== null) {
      editor.commands.insertContent(emojiData.emoji);
    }
  }

  return (
    <div className="text-editor" style={{ width: "100%", margin: "0" }}>
      <div className="menubar" style={{ position: "relative" }}>
        <MenuBar
          editor={editor}
          emojiBoard={emojiBoard}
          setEmojiBoard={setEmojiBoard}
        />
        {emojiBoard && (
          <div className="emojis">
            <EmojiPicker onEmojiClick={onClickEmoji} />
          </div>
        )}
      </div>

      <EditorContent className="editor" editor={editor} />
    </div>
  );
}
