import { useCallback, useState } from "react";

type MessageType = "success" | "error" | "info" | "warning" | string;

const useDisplayMessage = () => {
    const [message, setMessage] = useState<string | null>(null);
    const [type, setType] = useState<MessageType>("");
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const show = useCallback(
        (msg: string, msgType: MessageType = "info", duration: number = 3000) => {
            setMessage(msg);
            setType(msgType);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, duration);
        },
        []
    );

    const close = useCallback(() => {
        setIsVisible(false);
    }, []);

    return { show, close, message, type, isVisible };
};

export default useDisplayMessage;
