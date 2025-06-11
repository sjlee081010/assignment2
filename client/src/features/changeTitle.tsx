import { useEffect } from "react";

interface TitleProps {
    title: string;
}

export const useChageTitle = ({ title }: TitleProps) => {
    useEffect(() => {
        document.title = `게시판 | ${title}`;
    }, [title]);
};