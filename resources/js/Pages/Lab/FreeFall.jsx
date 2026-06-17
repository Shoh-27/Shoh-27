import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars, Plane, PerspectiveCamera } from '@react-three/drei';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { calculateFreeFall } from '@/Utils/PhysicsEngine';

function FallingObject({ position, color }) {
    return (
        <mesh position={position}>
            <sphereGeometry args={[0.5, 32, 32]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
}

export default function FreeFall({ auth }) {
    const [height, setHeight] = useState(10);
    const [gravity, setGravity] = useState(9.81);
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [currentHeight, setCurrentHeight] = useState(10);

    const startTimeRef = useRef(null);

    useEffect(() => {
        let animationFrame;
        if (isRunning) {
            const animate = (now) => {
                if (!startTimeRef.current) startTimeRef.current = now;
                const elapsed = (now - startTimeRef.current) / 1000;
                const h = calculateFreeFall(height, 0, gravity, elapsed);
                setCurrentHeight(h);
                setTime(elapsed);

                if (h <= 0) {
                    setIsRunning(false);
                    const finalTime = elapsed.toFixed(4);
                    const finalVel = (gravity * elapsed).toFixed(4);

                    router.post(route('lab.experiments.store'), {
                        type: 'Erkin tushish',
                        parameters: { height, gravity },
                        result: { time: finalTime, final_velocity: finalVel }
                    }, {
                        preserveScroll: true
                    });
                } else {
                    animationFrame = requestAnimationFrame(animate);
                }
            };
            animationFrame = requestAnimationFrame(animate);
        } else {
            startTimeRef.current = null;
        }
        return () => cancelAnimationFrame(animationFrame);
    }, [isRunning]);

    const resetSimulation = () => {
        setIsRunning(false);
        setTime(0);
        setCurrentHeight(height);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Erkin tushish laboratoriyasi</h2>}
        >
            <Head title="Erkin tushish" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-2/3 bg-black rounded-lg overflow-hidden h-[500px]">
                        <Canvas>
                            <PerspectiveCamera makeDefault position={[0, height / 2 + 2, 20]} />
                            <OrbitControls />
                            <Stars />
                            <ambientLight intensity={0.5} />
                            <pointLight position={[10, 10, 10]} />

                            <FallingObject position={[0, currentHeight, 0]} color="red" />

                            <Plane args={[100, 100]} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                                <meshStandardMaterial color="gray" />
                            </Plane>

                            <gridHelper args={[100, 100]} />
                        </Canvas>
                    </div>

                    <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow">
                        <h3 className="text-lg font-bold mb-4">Simulyatsiya parametrlari</h3>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Balandlik (m): {height}</label>
                            <input
                                type="range" min="1" max="50" step="1"
                                value={height}
                                onChange={(e) => {
                                    const val = Number(e.target.value);
                                    setHeight(val);
                                    if (!isRunning) setCurrentHeight(val);
                                }}
                                className="w-full"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Gravitatsiya (m/s²): {gravity}</label>
                            <select
                                value={gravity}
                                onChange={(e) => setGravity(Number(e.target.value))}
                                className="w-full border-gray-300 rounded-md shadow-sm"
                            >
                                <option value="9.81">Yer (9.81)</option>
                                <option value="1.62">Oy (1.62)</option>
                                <option value="3.71">Mars (3.71)</option>
                                <option value="24.79">Yupiter (24.79)</option>
                            </select>
                        </div>

                        <div className="flex gap-2 mb-6">
                            <button
                                onClick={() => setIsRunning(true)}
                                disabled={isRunning || currentHeight <= 0}
                                className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
                            >
                                Start
                            </button>
                            <button
                                onClick={resetSimulation}
                                className="bg-gray-500 text-white px-4 py-2 rounded"
                            >
                                Reset
                            </button>
                        </div>

                        <div className="border-t pt-4">
                            <p><strong>Vaqt:</strong> {time.toFixed(2)} s</p>
                            <p><strong>Joriy balandlik:</strong> {currentHeight.toFixed(2)} m</p>
                        </div>

                        <div className="mt-4">
                             <Link href={route('lab.dashboard')} className="text-blue-500 underline text-sm">
                                Barcha natijalarni ko'rish
                             </Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
