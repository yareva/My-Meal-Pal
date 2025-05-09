import mongoose from "mongoose";

/* one recipe (meal) */
const MealSchema = new mongoose.Schema({
  id:    String,
  title: String,
  image: String,
  macros: {
    calories: String,
    protein:  String,
    carbs:    String,
    fat:      String,
  },
});

/* one weekday */
const DaySchema = new mongoose.Schema({
  day:   { type: String, enum: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], required: true },
  meals: { type: [MealSchema], default: [], required: true }, // 3 meals
});

const MealPlanSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    days:   [DaySchema],
  },
  { timestamps: true }
);

export default mongoose.models.MealPlan ||
  mongoose.model("MealPlan", MealPlanSchema);
