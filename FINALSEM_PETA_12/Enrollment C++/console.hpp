#include <iostream>
#include <string>

class console
{
    public:
        static void log(std::string message)
        {
            std::cout<<message<<std::endl;
        }
};