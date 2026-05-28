'use client'
import React, { useState } from 'react';
import ImageForm from './ImageForm';

const CATEGORY_OPTIONS = ['ポエム', '報告', '短歌', 'ブログ', 'メモ'];

const TextForm: React.FC = () => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState(CATEGORY_OPTIONS[0]);
    const [submittedText, setSubmittedText] = useState(''); // 送信されたテキストを保存する状態

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCategory(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted text:', text, 'category:', category);
        setSubmittedText(`[${category}] ${text}`); // 送信されたテキストを保存
        // ここでテキストを送信する処理を追加できます
    };

    return (
        <form onSubmit={handleSubmit}>
            <select
                id="category-select"
                className="input-default block mb-2"
                value={category}
                onChange={handleCategoryChange}
            >
                {CATEGORY_OPTIONS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
            <textarea
                id="text-input"
                className="input-default h-40 block w-full"
                rows={6}
                value={text}
                onChange={handleChange}
                placeholder="テキストを入力してください"
            />
            <ImageForm />
            <button type="submit" className="button-default" >送信</button>
            <div id="submitted-text">{submittedText}</div>
        </form>
    );
};

export default TextForm;
