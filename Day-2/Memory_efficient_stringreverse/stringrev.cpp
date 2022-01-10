#include <iostream>
using namespace std;

int main(){
    string s;
    cin>>s;
    int start = 0;
    int end = s.length() -1;
    while(start<end){
        s[start] ^= s[end];
        s[end] ^= s[start];
        s[start] ^= s[end];
        ++start;
        --end;
    }
    cout<<s<<"\n";
    return 0;
}