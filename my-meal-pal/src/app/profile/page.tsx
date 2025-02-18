
export default function HomePage() {
    return (
        <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center p-8">
            {/* Hero Section */}
            <section className="text-center mb-12">
                <h1 className="text-5xl font-bold text-blue-800 mb-4">
                    Welcome to My Meal Pal!
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                    Discover personalized recipes and meal planning for your health and taste.
                </p>
                <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition-all">
                    Get Started
                </button>
            </section>

            {/* Features Section */}
            <section className="flex justify-center gap-8">
                <div className="text-center bg-white p-6 rounded-lg shadow-lg w-60">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Personalized Recipes</h2>
                    <p className="text-gray-600">Get recipes tailored to your nutritional goals and preferences.</p>
                </div>

                <div className="text-center bg-white p-6 rounded-lg shadow-lg w-60">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Fridge Image Upload</h2>
                    <p className="text-gray-600">Upload an image of your fridge, and we'll suggest meals with the ingredients you have!</p>
                </div>
            </section>

            {/* Call to Action */}
            <section className="mt-12 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Eat Healthier?</h2>
                <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition-all">
                    Start Your Meal Plan
                </button>
            </section>
        </div>
    );
}