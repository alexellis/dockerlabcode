using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NuGetSample
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length != 2)
            {
                Console.Error.WriteLine("Usage: calc 5 5");
                return;
            }

            int val = new Calc().Multiply(int.Parse(args[0]), int.Parse(args[1]));
            Console.WriteLine("Sum: {0}.", val);
        }
    }
}
