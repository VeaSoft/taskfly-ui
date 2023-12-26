/* eslint-disable react/react-in-jsx-scope */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

type ModalPanelProps = {
    children?: ReactNode | ReactNode[];
    icon?: string;
    size?: "xs" | "sm" | "md" | "lg" | "full";
    closeModal?: () => void;
    closeButton?: boolean;
    open?: boolean;
    title?: string | null;
    className?: string;
    modalSize?: string;
};

const ModalPanel = ({
    children,
    className,
    modalSize,
    icon,
    closeModal,
    size,
    closeButton,
    open = true,
    title = null
}: ModalPanelProps) => {
    const handleClose = () => {
        closeModal?.();
    };

    return (
        <div>
            <Transition appear show={open} as={Fragment}>
                <Dialog onClose={handleClose} className="fixed inset-0 z-40 overflow-y-auto bg-black bg-opacity-50">
                    <div className="flex items-center justify-center min-h-screen">
                        <div className={`${modalSize || "w-[90%] md:w-[60%] lg:w-[40%] xl:w-[40%]"} z-10 relative bg-white rounded-lg p-5`}>
                            {title && (
                                <div>
                                    <h4 className="text-assetize-primary text-center text-lg md:text-2xl">{title}</h4>
                                </div>
                            )}

                            <div className="mt-4 text-2xl text-center font-latoBold align-center">
                                {closeButton && (
                                    <button
                                        type="button"
                                        className="absolute top-0 right-0 px-2 m-3 bg-assetize-light-red text-assetize-primary"
                                        onClick={closeModal}
                                    >
                                        &times;
                                    </button>
                                )}
                            </div>
                            {children}
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ModalPanel;
