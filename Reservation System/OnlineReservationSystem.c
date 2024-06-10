#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>
#include <ctype.h> // Include ctype.h for isalpha and isdigit functions

#define MAX_SEATS 10

struct Reservation {
    int seatNumber;
    char name[50];
    char cnic[15];
    char phoneNumber[15];
    bool reserved;
};

struct Reservation reservations[MAX_SEATS];

void initializeReservations() {
    for (int i = 0; i < MAX_SEATS; i++) {
        reservations[i].seatNumber = i + 1;
        reservations[i].reserved = false;
    }
}

// Function to validate if the string contains only alphabets
bool isValidName(const char *str) {
    while (*str) {
        if (!isalpha(*str)) {
            return false;
        }
        str++;
    }
    return true;
}

// Function to validate if the string contains only digits and has a specific length
bool isValidNumeric(const char *str, int length) {
    int count = 0;
    while (*str) {
        if (!isdigit(*str)) {
            return false;
        }
        count++;
        str++;
    }
    return count == length;
}

void makeReservation(int seat, char *name, char *cnic, char *phoneNumber) {
    if (seat < 1 || seat > MAX_SEATS) {
        printf("Invalid seat number.\n");
        return;
    }

    if (!isValidName(name)) {
        printf("Invalid name. Please enter alphabets only.\n");
        return;
    }

    if (!isValidNumeric(cnic, 13)) {
        printf("Invalid CNIC. Please enter 13 numeric digits only.\n");
        return;
    }

    if (!isValidNumeric(phoneNumber, 11)) {
        printf("Invalid phone number. Please enter 11 numeric digits only.\n");
        return;
    }

    if (reservations[seat - 1].reserved) {
        printf("Seat %d is already reserved.\n", seat);
    } else {
        reservations[seat - 1].reserved = true;
        strcpy(reservations[seat - 1].name, name);
        strcpy(reservations[seat - 1].cnic, cnic);
        strcpy(reservations[seat - 1].phoneNumber, phoneNumber);
        printf("Reservation for seat %d made successfully.\n", seat);
    }
}

void displaySeatsMenu() {
    printf("Seats Menu:\n");
    for (int i = 0; i < MAX_SEATS; i++) {
        printf("Seat %d: %s\n", reservations[i].seatNumber, 
               reservations[i].reserved ? "Reserved" : "Available");
    }
}

int main() {
    initializeReservations();

    int choice, seat;
    char name[50], cnic[15], phoneNumber[15];

    do {
        printf("\n1. View Seats Menu\n");
        printf("2. Make Reservation\n");
        printf("3. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                displaySeatsMenu();
                break;
            case 2:
                printf("Enter seat number (1-10): ");
                scanf("%d", &seat);
                printf("Enter your name: ");
                scanf("%s", name);
                printf("Enter your CNIC: ");
                scanf("%s", cnic);
                printf("Enter your phone number: ");
                scanf("%s", phoneNumber);
                makeReservation(seat, name, cnic, phoneNumber);
                break;
            case 3:
                printf("Exiting...\n");
                break;
            default:
                printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 3);

    return 0;
}
