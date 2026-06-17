<?php

namespace Tests\Unit;

use Tests\TestCase;

class PhysicsEngineTest extends TestCase
{
    public function test_free_fall_calculation()
    {
        $h0 = 10;
        $v0 = 0;
        $g = 9.81;
        $t = 1;

        $h = $h0 - ($v0 * $t + 0.5 * $g * pow($t, 2));

        $this->assertEquals(5.095, $h);
    }
}
