
export default function UploadFridgePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">Upload Fridge Image</h1>
            <p className="text-gray-600 mt-2">Please upload an image of your fridge.</p>
            <form className="mt-6 space-y-4">
                <input type="file" className="border p-2 rounded w-80" />
                <button className="bg-green-500 text-white p-2 rounded">Upload</button>
            </form>
        </div>
    );
}