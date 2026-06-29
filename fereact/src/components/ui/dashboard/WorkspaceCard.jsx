import React from "react";

export default function WorkspaceCard({
    title,
    type,
    task,
    progress,
}) {
    return (
        <div className="h-full rounded-3xl border border-stone-300 bg-white p-6">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-headline text-2xl font-bold text-primary-900">
                        {title}
                    </h3>

                    <p className="font-label mt-2 text-lg text-stone-600">
                        {type}
                    </p>
                </div>

                <span className="text-xl font-medium text-stone-700">
                    {task}
                </span>
            </div>

            <div className="mt-6 h-3 rounded-full bg-stone-200 overflow-hidden">
                <div
                    className="h-full rounded-full bg-green-800"
                    style={{
                        width: `${progress}%`,
                    }}
                />
            </div>
        </div>
    );
}
