#include<bits/stdc++.h>
using namespace std;

//Simple Baconian cipher for letters 
int main()
{
    string message;
    int option;
    map <char, string> ciphertext {{'a',"00000"},{'b',"00001"},{'c',"00010"},{'d',"00011"},{'e',"00100"},{'f',"00101"},{'g',"00110"},{'h',"00111"},
        {'i',"01000"},{'j',"01001"},{'k',"01010"},{'l',"01011"},{'m',"01100"},{'n',"01101"},{'o',"01110"},{'p',"01111"},{'q',"10000"},{'r',"10001"},
        {'s',"10010"},{'t',"10011"},{'u',"10100"},{'v',"10101"},{'w',"10110"},{'x',"10111"},{'y',"11000"},{'z',"11001"}};

    cout << "Choose an option for the Baconian cipher:\n 1) to encrypt \n 2) to decrypt\n";
        
    cin >>option;
    cin.ignore();

    char letter;
    if (option == 1){
        cout << "Enter the message in plain text\n\n";
        getline(cin, message);                   
        for (int i = 0; i < message.length(); i++){
            if (isalpha(message[i])){
                letter = tolower(message[i]);
                cout << ciphertext.at(letter);
            }else if (isspace(message[i])){
                cout << "";
            }else{
                cout << message[i];
            }
        }        
        cout << "\n";
    }
    if (option == 2){
        string parsed_char;
        cout << "\nEnter the message in cipher text\n\n";
        getline(cin, message);
        for (int i = 0; i < message.length(); i = i + 5){
            for (int j = 0; j < 5; j++){
                parsed_char = parsed_char + message[i + j];
            }

            for (int k = 0; k < 26; k++){
                int iter = 97 + k;
                letter = char(iter);
                if (ciphertext.at(letter) == parsed_char)
                {
                    cout << letter;
                }
            }
            parsed_char = "";
        }


    }
    cout << "\n";
}