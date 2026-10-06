import { useEffect, useState } from 'react';
import MarkdownRedefined from '../../common/markdownRedefined';
import './markdown-writer.css'
import {LOREM_IPSUM_TEST_DOCUMENT} from './lorem_ipsum';
export function MarkdownWriter() {
    const [content, setContent] = useState<string>('');

    useEffect(() => {
        const savedDraft = localStorage.getItem('md_writer_draft');
        if (savedDraft) {
        setContent(savedDraft);
        
        } else {
            setContent(LOREM_IPSUM_TEST_DOCUMENT)
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('md_writer_draft', content);
        
    }, [content]);

    return (
        <>
            <div id='title'>
                <h1>MD Data Writer</h1>
                <strong>Markdown + GFM + LaTeX + Alerts</strong>
            </div>

            <main>
                <div id="editor-container">
                    <textarea id="editor" value={content} placeholder="Schreibe Markdown..." onChange={(e) => setContent(e.target.value)}></textarea>
                </div>
                <div id="preview-container">
                    <div id='preview' className='markdown-body'>
                        <MarkdownRedefined>{content}</MarkdownRedefined>
                    </div>
                </div>
            </main>
        </>
    )
}