package com.hello.event.controller;


import com.hello.event.model.Contact;
import com.hello.event.model.Reservation;
import com.hello.event.model.User;
import com.hello.event.repository.UserRepository;
import com.hello.event.service.ReservationService;
import com.hello.event.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/reservation")
@CrossOrigin(origins = "*")

public class ReservationController {
    private final ReservationService reservationService;
    private final UserRepository userRepository;

//    @PreAuthorize("hasRole('CLIENT')")
//    @PostMapping("/add")
//    public ResponseEntity<Reservation> save(@RequestBody Reservation reservation) {
//        try {
//
//            Reservation savedReservation = reservationService.save(reservation);
//            return ResponseEntity.ok(savedReservation);
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
//        }
//    }

    @PreAuthorize("hasRole('CLIENT')")
    @PostMapping("/add")
    public ResponseEntity<Reservation> save(@Valid @RequestBody Reservation reservation) {
        Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
        String username = loggedInUser.getName();
        User user = userRepository.findByUsername(username);
        try {
            reservation.setUser(user);
            Reservation savedReservation = reservationService.save(reservation);
            return ResponseEntity.ok(savedReservation);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }

    @PreAuthorize("hasRole('ADMIN') or hasRole('CLIENT')")
//    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/reservations")
    public ResponseEntity<List<Reservation>> getAllReservations() {
        List<Reservation> reservations = reservationService.getAllReservations();
        return ResponseEntity.ok(reservations);
    }

}
