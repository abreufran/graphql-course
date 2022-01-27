import { tasks} from "./sample"

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World.'
        },
        greet(root, args) {
            console.log(args.name);
            return `Hello ${args.name}!`;
        },
        tasks () {
            return tasks;
        }
    },
    Mutation: {
        createTask(_, { input}) {
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
}