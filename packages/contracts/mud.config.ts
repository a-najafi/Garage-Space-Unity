import { mudConfig, resolveTableId } from "@latticexyz/world/register";

export default mudConfig({
  overrideSystems: {
    IncrementSystem: {
      name: "increment",
      openAccess: true,
    },
  },
  tables: {
    Garage: {
	schema: {
        value: "boolean",
      },
      storeArgument: true,
    },
	Tenent: {
      schema: {
        GarageAddress: "address",
      },
      storeArgument: true,
    },
	Position: {
      schema: {
        x: "uint32",
		y: "uint32",
      },
      storeArgument: true,
    },
	Cluster: {
      schema: {
        id: "uint32",
      },
      storeArgument: true,
    }
  },
  modules: [
    {
      name: "KeysWithValueModule",
      root: true,
      args: [resolveTableId("Counter")],
    },
  ],
});
