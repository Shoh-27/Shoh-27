import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function Dashboard({ auth, experiments }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Mening Eksperimentlarim</h2>}
        >
            <Head title="Laboratoriya Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-lg font-bold">O'tkazilgan tajribalar</h3>
                            <Link
                                href={route('lab.free-fall')}
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Yangi tajriba boshlash
                            </Link>
                        </div>

                        {experiments.length === 0 ? (
                            <p className="text-gray-500">Hozircha hech qanday tajriba o'tkazilmagan.</p>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Turi</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Parametrlar</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Natija</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sana</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {experiments.map((exp) => (
                                            <tr key={exp.id}>
                                                <td className="px-6 py-4 whitespace-nowrap">{exp.type}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                    {Object.entries(exp.parameters).map(([k, v]) => (
                                                        <div key={k}>{k}: {v}</div>
                                                    ))}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold">
                                                    {Object.entries(exp.result).map(([k, v]) => (
                                                        <div key={k}>{k}: {v}</div>
                                                    ))}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(exp.created_at).toLocaleString('uz-UZ')}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
