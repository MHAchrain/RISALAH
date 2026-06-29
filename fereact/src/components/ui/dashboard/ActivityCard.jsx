import React from "react";

export default function ActivityCard({
    title,
    date,
    workspace,
}) {
    return (
        <div className="rounded-3xl border border-stone-300 bg-white p-6">
            <h3 className="font-headline text-2xl font-bold text-primary-900">
                {title}
            </h3>

            <p className="font-label mt-3 text-lg text-stone-600">
                {date} • {workspace}
            </p>
        </div>
    );
}