using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DrinkPage
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("You should try the drink on page " + GetMyPageNumber().ToString());
            Console.ReadLine();
        }

        public static int GetMyPageNumber()
        {
            var random = new Random();
            var list = new List<int> { 10, 12, 16, 18, 22, 24, 28, 30, 34, 36, 38, 42, 44, 48, 50, 52, 56, 58, 62, 64, 68, 70, 74, 76, 80, 82, 86, 88, 92, 94 };
            var index = random.Next(list.Count);
            return list[index];
        }
    }
}
