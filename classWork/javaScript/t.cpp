
// C++ program to illustrate the
// element access in vector
#include <bits/stdc++.h>
using namespace std;

int gcdTime(vector<int>& arr, int index ){
    if(index==arr.size()-1){
        return arr[index];
    }
    int a=arr[index];
    int b=gcdTime(arr, index+1);
    return __gcd(a, b);
}

int main()
{
    int t;
    std::cin >> tc;
    while(tc--){
        int d;
        std::cin>>d;
        vector<int>a(d,0);
        for(int i=0;i<d;i++){
            std::cin>>a[i];
        }
        int max=gcdTime(a,0);
        int v=0;
        for(int i=0;i<d;i++){
            if(a[i]==max){
                v++;
            }
        }
        std::cout << d-v << std::endl;
    }
 

    return 0;
}
