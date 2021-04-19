import GalaxySchema from "../models/Galaxy";
import MoonSchema from "../models/Moon";
import PlanetSchema from "../models/Planet";
import StarSchema from "../models/Star";
import mongoose from "mongoose";

class DbContext {
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
  Moons = mongoose.model("Moon", MoonSchema);
  Planets = mongoose.model("Planet", PlanetSchema);
  Stars = mongoose.model("Star", StarSchema);
}

export const dbContext = new DbContext();
